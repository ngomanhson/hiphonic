import { User1, User2, User3 } from "@/app/assets/images/Images";
import AccountItem from "./AccountItem";
import styles from "./DirectMessage.module.css";

const DirectMessage = () => {
    const directMessageData = [
        {
            accountName: "Darrell Steward",
            to: "/",
            avatar: User1,
        },
        {
            accountName: "Arlene McCoy",
            to: "/",
            avatar: User2,
        },
        {
            accountName: "Annette Black",
            to: "/",
            avatar: User3,
        },
    ];
    return (
        <div className={styles["wrapper"]}>
            <div className={styles["header"]}>
                <span className={styles["label"]}>DirectMessage</span>
                <button className={styles["action"]}>+</button>
            </div>

            <ul className={styles["account-list"]}>
                {directMessageData.map((item, index) => (
                    <AccountItem key={index} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default DirectMessage;
