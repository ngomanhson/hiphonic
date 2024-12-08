import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./DirectMessage.module.css";

interface AccountItemProps {
    accountName: string;
    to: string;
    avatar: string | StaticImageData;
}

const AccountItem = (props: AccountItemProps) => {
    const { accountName, to, avatar } = props;

    return (
        <li>
            <Link href={to} className={styles["account-item"]}>
                <Image src={avatar} alt={accountName} width={40} height={40} />
                {accountName}
            </Link>
        </li>
    );
};

export default AccountItem;
