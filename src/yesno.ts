type YesOrNo = "yes" | "no";

const yesno = (value: boolean): YesOrNo => (value ? "yes" : "no");

export default yesno;
