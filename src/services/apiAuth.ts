import supabase from "./supabase";

export async function signUp(formData: SignUpFormData) {
    // sign up user
    const { data: newUser, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
    });

    if (signUpError || !newUser.user)
        throw new Error("An error occurred during sign up...");

    // create profile
    const { error: profileError } = await supabase.from("profiles").insert({
        id: newUser.user.id,
        display_name: formData.displayName,
        username: formData.username,
    });

    if (profileError)
        throw new Error("An error occurred during profile creation...");
}

export async function isUsernameAvailable(username: string) {
    const { data, error } = await supabase
        .from("profiles")
        .select("id")
        .eq("username", username)
        .limit(1);

    if (error)
        throw new Error(
            "An error occurred while checking username availability..."
        );

    return !(data && data.length > 0);
}
