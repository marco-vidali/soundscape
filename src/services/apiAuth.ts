import supabase from "./supabase";

export async function signUp(formData: SignUpFormData) {
    // sign up user
    const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    });

    if (signUpError || !data.user) throw new Error();

    // create profile
    const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        display_name: formData.displayName,
        username: formData.username,
    });

    if (profileError) throw new Error(profileError.message);
}
