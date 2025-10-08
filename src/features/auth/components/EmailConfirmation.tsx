import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import supabase from "@/services/supabase";

export default function EmailConfirmation() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const confirmEmail = async () => {
            const tokenHash = searchParams.get("token_hash");

            if (tokenHash) {
                try {
                    const { error } = await supabase.auth.verifyOtp({
                        type: "email",
                        token_hash: tokenHash,
                    });

                    if (error) {
                        console.error(
                            "An error occurred while confirming your email..."
                        );
                        return;
                    }

                    navigate("/profile/create");
                } catch (err) {
                    console.error(
                        "An unexpected error occurred while confirming your email..."
                    );
                }
            }
        };

        confirmEmail();
    }, [searchParams, navigate]);

    return <p>Confirming your email...</p>;
}
