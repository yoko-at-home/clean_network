import type { NextPage } from "next";
import { Layout } from "src/layout";

const User: NextPage = () => {
  return (
    <Layout>
      <div className="flex justify-between pt-6">
        <div></div>
      </div>
      <div className="flex h-full flex-col justify-between">
        <div>クラスタ</div>
        <div>汚染度合</div>
        <div>活動履歴</div>
      </div>
    </Layout>
  );
};

export default User;
