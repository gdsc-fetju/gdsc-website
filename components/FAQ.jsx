import React from 'react'
import Faq from 'react-faq-component'
import classes from "./faq.module.css";
function FAQ() {
    const data = {

        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };


    const config = {
        animate: true,
        tabFocus: true
    };

    const styles = {
        bgColor: '#f5f5f5',
        arrowColor: "black",
        rowTitleColor: "#212120",
        rowContentColor: '#212121',
        rowContentPaddingLeft: '5px',
        rowContentPaddingRight: '5px'
    }

    return (
        <div className='p-10 md:p-15 bg-[#f5f5f5]'>
            <h1 className='text-3xl font-bold text-[#00479b] mb-8  text-center' > Frequently Asked Question</ h1 >
            <div className=" w-10/12 mx-auto text-justify ">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div >
    )
}

export default FAQ;