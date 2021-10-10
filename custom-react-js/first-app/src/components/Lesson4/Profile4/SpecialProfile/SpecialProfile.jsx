import React from "react";

import Header from "../Others/Header";
import Knowledge from "../Others/Knowledge";
import Footer from "../Others/Footer";
import '../profile4.style.css'

class SpecialProfile extends React.Component {
    // // Not Define (this)
    // ibnTaymiyyah = {
    //     name: 'Imam Ibn Taymiyyah',
    //     designation: 'Imam, Salfe Salehin,Shaiykhul Islam',
    //     number: '6',
    //     one: 'Quran',
    //     two: 'Hadith',
    //     three: 'Fiqah',
    //     four: 'Sirah',
    //     five: 'Ulmul Hadith',
    //     // six: 'Sirah',
    //     sOne: 'Ibn Kasir',
    //     sTwo: 'Ibnul Jawji',
    //     sThree: 'Ibn Kayyim',
    //     // sFour: 'Ibn Abdullah',
    // };
    render() {
        // Not Define (this)
        let ahmadIbnHamble = {
            name: 'Ahmad Ibn Hamble',
            designation: 'Imam, Salfe Salehin',
            number: '5',
            one: 'Quran',
            two: 'Hadith',
            three: 'Fiqah',
            four: 'Tafsir',
            five: 'Ulmul Hadith',
            // six: 'Sirah',
            sOne: 'Ib Abid Dunya',
            sTwo: 'Bukhari',
            sThree: 'Muslim',
            // sFour: 'Ibn Abdullah',
        };
        return (
            <div>
                <div className='main4 p-5 border w-50 m-auto'>
                    <Header name={ahmadIbnHamble.name} designation={ahmadIbnHamble.designation} number={ahmadIbnHamble.number} />
                    <Knowledge one={ahmadIbnHamble.one} two={ahmadIbnHamble.two} three={ahmadIbnHamble.three} four={ahmadIbnHamble.four} five={ahmadIbnHamble.five} />
                    <Footer sOne={ahmadIbnHamble.sOne} sTwo={ahmadIbnHamble.sTwo} sThree={ahmadIbnHamble.sThree} />
                </div>

                {/* <div className='main4 p-5 border w-50 m-auto'>
                    <Header name={this.ibnTaymiyyah.name} designation={this.ibnTaymiyyah.designation} number={this.ibnTaymiyyah.number} />
                    <Knowledge one={this.ibnTaymiyyah.one} two={this.ahmadIbnHamble.two} three={this.ibnTaymiyyah.three} four={this.ibnTaymiyyah.four} five={this.ibnTaymiyyah.five} />
                    <Footer sOne={this.ibnTaymiyyah.sOne} sTwo={this.ibnTaymiyyah.sTwo} sThree={this.ibnTaymiyyah.sThree} />
                </div> */}
            </div>

        )
    }
}
export default SpecialProfile