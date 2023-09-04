import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

function PostCard() {
  return (
    <article className={styles.cardContainer}>
      <div
        className={`${styles.card} bg-[url('/images/common/post-card.jpg')] bg-no-repeat bg-contain w-[300px] h-[400px]`}
      >
        <div className="pl-16 pt-10">
          <Link href="/posts/1">
            <h2 className="text-white text-3xl">첫 번째 글입니다.</h2>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
