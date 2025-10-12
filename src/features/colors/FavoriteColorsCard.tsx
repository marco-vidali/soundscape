import FavoriteColorsForm from "./FavoriteColorsForm";
import ResponsiveCard from "@/ui/atoms/ResponsiveCard";
import FavoriteColorsTitle from "./FavoriteColorsTitle";

import { Card } from "@/ui/atoms/Card";

const FavoriteColorsCard = () => {
    return (
        <ResponsiveCard>
            <Card.Header>
                <Card.Title>
                    <FavoriteColorsTitle />
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <FavoriteColorsForm />
            </Card.Content>
        </ResponsiveCard>
    );
};

export default FavoriteColorsCard;
