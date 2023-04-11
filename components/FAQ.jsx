import React from "react";
import Faq from "react-faq-component";

function FAQ() {
  const data = {
    rows: [
      {
        title: "Who should join Google Developer Student Clubs FET-JU ?",
        content:
          "All College and university students are encouraged to join Google Developer Student Clubs FET-JU.",
      },
      {
        title: " What are the benefits of joining GDSC FET-JU ? ",
        content:
          "Joining Google Developer Student Clubs FET-JU offers a supportive community, practical skills through workshops and hands-on projects, and career development opportunities.",
      },

      {
        title: "Do I have to pay for joining this club?",
        content: (
          <p>
            No, It is free for everyone and you can always join{" "}
            <span className="font-bold">free of cost.</span>
          </p>
        ),
      },
      {
        title: `Do I need to have programming experience to join ? `,
        content:
          "No programming experience is necessary to join GDSC FET-JU! We provide a supportive community and resources to help you learn and grow.",
      },
      {
        title: "How is GDSC different from other clubs in the campus? ",
        content: <p className=""> If You Know You Know!!</p>,
      },
    ],
  };

  const config = {
    animate: true,
    tabFocus: true,
  };

  const styles = {
    bgColor: "#fff",
    arrowColor: "black",
    rowTitleColor: "#212120",
    rowContentColor: "#212121",
    rowContentPaddingLeft: "5px",
    rowContentPaddingRight: "5px",
  };

  return (
    <div className="px-1 py-5 md:p-15">
      <h1 className="text-4xl font-bold text-[#00479b] mb-8  text-center">
        Frequently Asked Question
      </h1>
      <div className=" w-10/12 mx-auto text-justify ">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}

export default FAQ;
