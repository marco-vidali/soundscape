import supabase from "./supabase";

export async function signUp(formData: SignupFormData) {
    const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    });

    if (error || !data.user) throw new Error(error?.message);
}

export async function logIn(formData: LoginFormData) {
    const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
    });

    if (error) throw new Error(error.message);
}

export async function isLoggedIn() {
    const { data, error } = await supabase.auth.getSession();

    if (error) throw new Error(error.message);

    return !!data;
}

export async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);

    return data;
}
