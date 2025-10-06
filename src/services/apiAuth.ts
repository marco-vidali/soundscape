import supabase from "../lib/supabase";

export async function signUp(formData: SignupFormData) {
    const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    });

    if (error || !data.user)
        throw new Error("An error occurred during signup...");
}

export async function logIn(formData: LoginFormData) {
    const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
    });

    if (error) throw new Error("An error occurred during login...");
}

export async function isLoggedIn() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error("An error has occurred while checking session...");
        return false;
    }

    return !!data;
}

export async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
        console.error("An error has occurred while getting user...");
        return null;
    }

    return data;
}
