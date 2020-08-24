import * as React from 'react';
import {
    MainContainer,
    ContainerLeft,
    ContainerRight,
    Description,
    AdditionalData,
    ImageProfile,
    TitlePost,
    ContainerIcons,
    ContainerTitle, Icon, TextIcon, IconMessage, IconRetweet, IconLike
} from "./styles";
import { FiMessageCircle } from 'react-icons/fi';
import { BsHeart, BsHeartFill, BsArrowRepeat } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai';
import {Card} from "../card";
import {useSelector} from "react-redux";
import {RootState} from "../../../reducers";
import {post, posts} from "../../../types/post";
import {useState} from "react";

interface Props {
    id: string
}

export const MainSocialCard = (props: Props) => {
    const postsArray = useSelector<RootState, posts>(state => state.social);
    const [retweet, setRetweet] = useState(false);
    const [red, setRed] = useState(false);
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

    const handleClickRetweet= () => {
        if (retweet){
            setRetweet(false);
            postPop.retweets = postPop.retweets-1;
        }else {
            setRetweet(true)
            postPop.retweets = postPop.retweets+1;
        }
    }
    const handleClickLike= () => {
        if (red){
            setRed(false);
            postPop.likes = postPop.likes-1;
        }else {
            setRed(true)
            postPop.likes = postPop.likes+1;
        }
    }
    const printLike = () => {
        if (red){
            return <BsHeartFill/>
        } else {
            return <BsHeart/>
        }
    }

    return <MainContainer>
        <ContainerLeft>
            <ImageProfile src={postPop.srcUserImage}/>
        </ContainerLeft>
        <ContainerRight>
            <ContainerTitle>
                <TitlePost>
                    {postPop.titlePost}
                </TitlePost>
                <AdditionalData>
                    {postPop.additionalData}
                </AdditionalData>
            </ContainerTitle>
            <Description>
                {postPop.descriptionPost}
            </Description>
            <Card id={postPop.id}/>
            <ContainerIcons>
                <IconMessage >
                    <FiMessageCircle/>
                    <TextIcon>
                    {postPop.comments}
                    </TextIcon>
                </IconMessage>
                <IconRetweet className={retweet ? 'green': ''} onClick={handleClickRetweet}>
                    <BsArrowRepeat/>
                    <TextIcon>
                    {postPop.retweets}
                    </TextIcon>
                </IconRetweet>
                <IconLike className={red ? 'red': ''} onClick={handleClickLike}>
                    {printLike()}
                    <TextIcon>
                    {postPop.likes}
                    </TextIcon>
                </IconLike>
                <Icon >
                    <AiOutlineMail/>
                </Icon>
            </ContainerIcons>
        </ContainerRight>
    </MainContainer>
}
