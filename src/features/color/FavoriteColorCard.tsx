import FavoriteColorForm from "./FavoriteColorForm";
import ResponsiveCard from "@/ui/atoms/ResponsiveCard";
import FavoriteColorTitle from "./FavoriteColorTitle";

import { Card } from "@/ui/atoms/Card";

const FavoriteColorCard = () => {
    return (
        <ResponsiveCard>
            <Card.Header>
                <Card.Title>
                    <FavoriteColorTitle />
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <FavoriteColorForm />
            </Card.Content>
        </ResponsiveCard>
    );
};

export default FavoriteColorCard;
