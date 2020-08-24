import * as React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../../reducers";
import {post, posts} from "../../../types/post";
import {Container, Title, Description, Link, Image, ContainerImage, ContainerText} from "./styles";

interface Props {
    id: string
}

export const Card = (props: Props) => {
    const postsArray = useSelector<RootState, posts>(state => state.social);

    const getCardInfo = (): post => {
        // eslint-disable-next-line array-callback-return
        const postPop = postsArray.posts.filter((value) => {
            if (value.id===props.id){
                return value
            }
        });
        return postPop.pop();
    }
    const postPop = getCardInfo();
    return <Container>
        <ContainerImage>
            <Image src={postPop.srcImageCard}/>
        </ContainerImage>
        <ContainerText>
            <Title>
                {postPop.titleCard}
            </Title>
            <Description>
                {postPop.descriptionCard}
            </Description>
            <Link>
                {postPop.urlCard}
            </Link>
        </ContainerText>
    </Container>
}
