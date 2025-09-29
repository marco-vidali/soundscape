import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const ProfileCreationForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Display Name:</label>
                <input
                    {...register("displayName", {
                        required: "Display Name is required",
                    })}
                />

                {errors.displayName && (
                    <p>{errors.displayName.message as string}</p>
                )}
            </div>

            <div>
                <label>Username:</label>
                <input
                    {...register("username", {
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message:
                                "Username must be at least 3 characters long",
                        },
                    })}
                />

                {errors.username && <p>{errors.username.message as string}</p>}
            </div>

            <button type="submit">Create</button>
        </form>
    );
};

export default ProfileCreationForm;
