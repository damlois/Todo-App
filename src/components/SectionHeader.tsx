import { ReactNode } from "react";

interface TScetionHeader {
  children: string | ReactNode;
  alignment: "left" | "center";
}

const SectionHeader = ({ children, alignment }: TScetionHeader) => {
  return (
    <div
      className={`bg-light-blue h-[123px] flex ${
        alignment === "left" ? "justify-start" : "justify-center"
      } items-center`}
    >
      <div className="px-[32px]">{children}</div>
    </div>
  );
};

export default SectionHeader;
