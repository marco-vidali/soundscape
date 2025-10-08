import supabase from "@/services/supabase";
import FullScreenLoader from "@/ui/molecules/FullScreenLoader";

import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function EmailConfirmation() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

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
                        console.error(error.message);
                        return;
                    }

                    navigate("/profile/create");
                } catch (err) {
                    console.error(err);
                }
            }
        };

        confirmEmail();
    }, [searchParams, navigate]);

    return <FullScreenLoader />;
}
