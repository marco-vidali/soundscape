import supabase from "./supabase";

export async function signUp(formData: SignupFormData) {
    const { data: newUser, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    });

    if (signUpError || !newUser.user)
        throw new Error("An error occurred during sign up...");
}

export async function logIn(formData: LoginFormData) {
    const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
    });

    if (error) throw new Error("An error occurred during login...");
}
