import { URL } from "utilities/constants";
import { MikMainContentCardImgBox, MikMainContentCardLink, MikMainContentCardList, MikMainContentCardRatingBox, MikMainContentCardTitle } from "utilities/styledComponent";

const CardItems = ({ animeList }) => animeList.map(anime => (
    <MikMainContentCardLink to={URL.ANIME_DETAILS.replace(':slug', anime.id)} key={anime.id}>
        <MikMainContentCardList>
            <MikMainContentCardImgBox
                src={anime.coverImage.extraLarge}
                alt={anime.title.romaji}
                loading='lazy' />
            <MikMainContentCardRatingBox color={anime.coverImage.color}>Rating: {anime.averageScore ?? 0}</MikMainContentCardRatingBox>
        </MikMainContentCardList>
        <MikMainContentCardTitle>{anime.title.romaji}</MikMainContentCardTitle>
    </MikMainContentCardLink>
));

export default CardItems;