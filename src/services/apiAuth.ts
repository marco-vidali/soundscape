import supabase from "./supabase";

export async function signUp(formData: SignupFormData) {
    const { data: newUser, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    });

    if (signUpError || !newUser.user)
        throw new Error("An error occurred during sign up...");
}
