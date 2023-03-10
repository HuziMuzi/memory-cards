import React from "react";
import { SMegaShadow } from "../../../components/MegaShadow/styled";
import { UiBox } from "../../../components/UiBox/UiBox";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setIsUserProfileOpen } from "../../../../bll/usersReducer";
import { Box } from "../../../components/Box/Box";
import Avatar from "../../../components/Avatar/Avatar";
import defaultAvatar from "../../../assets/img/default-photo.png";
import LoaderIcon from "../../../assets/loaders/loader";
import { transformDate } from "../../../../common/utils/tarnsformDate";
import { SText } from "../../../components/Text/SText";
import Button from "../../../components/Button/Button";
import { useSearchParams } from "react-router-dom";
import { initialObjectParams } from "../../../../common/utils/getUrlParams";

export const UserProfileModal = () => {
    const dispatch = useAppDispatch();
    const [, setSearchParams] = useSearchParams();

    const userName = useAppSelector((state) => state.users.userData.name);
    const userData = useAppSelector((state) => state.users.userData);
    const isUserFetching = useAppSelector((state) => state.users.isUserFetching);

    const registerDate = transformDate(userData.created);
    const lastActivityDate = transformDate(userData.updated, true);

    const onClickHandler = () => {
        setSearchParams({...initialObjectParams, user_id: userData._id});
        dispatch(setIsUserProfileOpen(false));
    };

    const onShadowClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        dispatch(setIsUserProfileOpen(false));
    };

    return (
        <SMegaShadow onClick={onShadowClickHandler}>
            <UiBox title={!isUserFetching ? userName : ""}>
                {isUserFetching ? (
                    <LoaderIcon shadow />
                ) : (
                    <Box flexDirection={"column"} gap={30}>
                        <Box width={"100%"} justifyContent={"center"}>
                            <Avatar size={"large"} img={userData.avatar || defaultAvatar} />
                        </Box>
                        <Box flexDirection={"column"} gap={10}>
                            <Box justifyContent={"space-between"}>
                                <SText opacity={0.4}>Registered:</SText>
                                <SText>{registerDate}</SText>
                            </Box>
                            <Box justifyContent={"space-between"}>
                                <SText opacity={0.4}>Last activity:</SText>
                                <SText>{lastActivityDate}</SText>
                            </Box>
                            <Box justifyContent={"space-between"}>
                                <SText opacity={0.4}>Total packs count:</SText>
                                <SText>{userData.publicCardPacksCount}</SText>
                            </Box>
                        </Box>
                        <Box justifyContent={"center"}>
                            <Button onClick={onClickHandler} label={"View packs"} withShadow />
                        </Box>
                    </Box>
                )}
            </UiBox>
        </SMegaShadow>
    );
};
