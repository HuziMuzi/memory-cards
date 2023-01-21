import React, { FC } from "react";
import { TIconProps } from "./types";

export const StarIcon: FC<TIconProps> = (props) => {
    return (
        <span className={props.className || ""}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.1437 6.62759C10.9303 4.6666 11.3236 3.6861 12 3.6861C12.6763 3.6861 13.0696 4.6666 13.8562 6.6276L13.8928 6.71891C14.3372 7.82678 14.5594 8.38071 15.0123 8.7174C15.4651 9.05409 16.0596 9.10733 17.2485 9.2138L17.4634 9.23305C19.4092 9.40732 20.3822 9.49445 20.5903 10.1134C20.7985 10.7324 20.076 11.3898 18.6309 12.7044L18.1487 13.1432C17.4172 13.8087 17.0514 14.1415 16.8809 14.5776C16.8491 14.659 16.8227 14.7423 16.8018 14.8271C16.6897 15.2818 16.7968 15.7645 17.0111 16.73L17.0777 17.0305C17.4714 18.8049 17.6682 19.692 17.3246 20.0747C17.1961 20.2177 17.0292 20.3206 16.8438 20.3712C16.3476 20.5066 15.6431 19.9326 14.2342 18.7845C13.309 18.0306 12.8464 17.6537 12.3153 17.5689C12.1064 17.5355 11.8935 17.5355 11.6846 17.5689C11.1535 17.6537 10.6909 18.0306 9.76577 18.7845C8.35681 19.9326 7.65234 20.5066 7.15614 20.3712C6.97072 20.3206 6.80381 20.2177 6.67538 20.0747C6.33171 19.692 6.52854 18.8049 6.92222 17.0305L6.98889 16.73C7.2031 15.7645 7.31021 15.2818 7.19815 14.8271C7.17725 14.7423 7.15081 14.659 7.11901 14.5776C6.94854 14.1415 6.58279 13.8087 5.85128 13.1432L5.369 12.7044C3.92395 11.3898 3.20143 10.7324 3.40961 10.1134C3.61779 9.49445 4.5907 9.40732 6.53651 9.23305L6.75145 9.2138C7.94036 9.10733 8.53482 9.05409 8.98767 8.7174C9.44052 8.38071 9.66272 7.82678 10.1071 6.71891L10.1437 6.62759Z"
                    stroke="#CCD2E3"
                    strokeWidth="2"
                />
            </svg>
        </span>
    );
};
