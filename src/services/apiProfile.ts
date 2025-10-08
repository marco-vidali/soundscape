import supabase from "./supabase";

export async function createProfile(formData: ProfileCreationFormData) {
    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) throw new Error(userError?.message);

    const { error: profileError } = await supabase.from("profiles").insert({
        id: user.id,
        display_name: formData.displayName,
        username: formData.username,
    });

    if (profileError) throw new Error(profileError.message);
}

export async function isUsernameAvailable(username: string) {
    const { data, error } = await supabase
        .from("profiles")
        .select("id")
        .eq("username", username)
        .limit(1);

    if (error) throw new Error(error.message);

    return !(data && data.length > 0);
}

export async function getProfile(userId: string) {
    const { data, error } = await supabase
        .from("profiles")
        .select("id")
        .eq("id", userId)
        .limit(1);

    if (error) throw new Error(error.message);

    return data[0];
}
