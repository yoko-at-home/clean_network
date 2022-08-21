export const FooterPart = () => {
  return (
    <div className="my-14 flex justify-center font-mono text-sm">
      <span className="whitespace-nowrap bg-gradient-to-r from-green-900 to-violet-900 bg-clip-text  text-transparent">
        {`© ${new Date().getFullYear()}`} グラフ管理アプリ
      </span>
    </div>
  );
};
