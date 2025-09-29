import supabase from "./supabase";

export async function createProfile(formData: ProfileCreationFormData) {
    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        throw new Error("No authenticated user was found...");
    }

    const { error: profileError } = await supabase.from("profiles").insert({
        id: user.id,
        display_name: formData.displayName,
        username: formData.username,
    });

    if (profileError) {
        throw new Error("An error occurred during profile creation...");
    }
}
