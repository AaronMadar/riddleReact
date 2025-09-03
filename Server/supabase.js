import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config({ path: "./Server/.env" }); // <--- chemin relatif correct



const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function signupdb(userdetails) {
    const { username, password } = userdetails;
    
    
    try {
        // Vérifier si l'utilisateur existe déjà
        const { data: existingUser, error: checkError } = await supabase
            .from('users')
            .select('username')
            .eq('username', username)
            .single();

        if (existingUser) {
            console.log('Cet utilisateur existe déjà');
            return false;
        }

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 12);

        // Insérer le nouvel utilisateur
        const { data, error } = await supabase
            .from('users')
            .insert([{ username, password: hashedPassword }])
            .select();

        if (error || !data) {
            console.log('Erreur lors de l\'inscription:', error?.message);
            return false;
        }
        // supabase renvoit toujours un array c pour ca que jecris [0] parcontre si je dis single() il renverra qun objet
        const token = jwt.sign(
               { username: data[0].username,
                 role: data[0].role || 'user', 
                 highscore: data[0].highscore || 0 },
                 process.env.JWT_SECRET,
               { expiresIn: '20m' }
           );
        console.log('Utilisateur créé:', username);
        return {success:true, token};
    } catch (error) {
        console.log('Erreur Supabase:', error.message);
        return false;
    }
}


export async function logindb(userdetails) {
        
    const { username, password } = userdetails;
    try {

        // Chercher l'utilisateur dans la table 'users'
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('username', username)
            .single(); // Prend un seul utilisateur

        if (error || !data) {
            console.log('Utilisateur non trouvé ou erreur:', error?.message || 'Aucun utilisateur');
            return false;
        }

        // Vérifier le mot de passe
        const isPasswordValid = await bcrypt.compare(password, data.password);
        if (!isPasswordValid) {
            console.log('Mot de passe incorrect');
            return false;
        }

        
        // Générer un token avec username, role, highscore
        const token = jwt.sign(
               { username: data.username,
                 role: data.role || 'user', 
                 highscore: data.highscore || 0 },
                 process.env.JWT_SECRET,
               { expiresIn: '20m' }
           );
           console.log('Connexion réussie pour:', username);
           return { token, username: data.username };

        
    } catch (error) {
        console.log('Erreur Supabase:', error.message);
        return false;
    }
}