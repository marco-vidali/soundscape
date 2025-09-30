import supabase from "./supabase";

export async function signUp(formData: SignupFormData) {
    const { data: newUser, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    });

    if (error || !newUser.user)
        throw new Error("An error occurred during signup...");
}

export async function logIn(formData: LoginFormData) {
    const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
    });

    if (error) throw new Error("An error occurred during login...");
}
