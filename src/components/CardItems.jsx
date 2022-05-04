import { URL } from "utilities/constants";
import { MikMainContentCardImgBox, MikMainContentCardLink, MikMainContentCardList, MikMainContentCardRatingBox, MikMainContentCardTitle } from "utilities/styledComponent";

const CardItems = ({ animeList, isEdged = false }) => animeList.map(anime => (
    <MikMainContentCardLink to={URL.ANIME_DETAILS.replace(':slug', !isEdged ? anime.id : anime.node.id)} key={!isEdged ? anime.id : anime.node.id}>
        <MikMainContentCardList>
            <MikMainContentCardImgBox
                src={!isEdged ? anime.coverImage.extraLarge : anime.node.coverImage.extraLarge}
                alt={!isEdged ? anime.title.romaji : anime.node.title.romaji}
                loading='lazy' />
            <MikMainContentCardRatingBox color={!isEdged ? anime.coverImage.color: anime.node.coverImage.color}>Rating: { !isEdged ? anime.averageScore ?? 0 : anime.node.averageScore ?? 0}</MikMainContentCardRatingBox>
        </MikMainContentCardList>
        <MikMainContentCardTitle>{!isEdged ? anime.title.romaji : anime.node.title.romaji}</MikMainContentCardTitle>
    </MikMainContentCardLink>
));

export default CardItems;