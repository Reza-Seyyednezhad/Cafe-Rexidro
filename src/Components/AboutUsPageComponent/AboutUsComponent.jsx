import Header from "../HeaderComponent/Header";
import AdminComponent from "./AdminsComponent";
import unknown from "../../assets/images/unknown.png";
import FooterComponent from "../FooterComponent/FooterComponent";

export default function AboutUsComponent() {
    return (
        <div className="h-[100vh] flex flex-col items-center justify-center w-screen backdrop-brightness-40 grow">
            <Header />
            <div className="about-us-section flex flex-col items-center justify-start w-screen grow">
                <div className="about-us-section-content w-3/4">
                    <p className="text-[#F1E6D5] text-lg text-justify leading-13">
                        کافه دلنشین در سال ۱۳۹۵ با عشق به قهوه و ایجاد یک فضای صمیمی تأسیس شد. 
                        این کافه در قلب شهر، مکانی دنج و آرام برای کسانی است که به دنبال فرار از هیاهوی روزمره هستند.
                        شروع کار ما از یک ایده ساده بود: ایجاد جایی که مردم بتوانند لحظاتی بی‌دغدغه و راحت را در کنار دوستان و خانواده‌شان سپری کنند.
                        از انتخاب دقیق دانه‌های قهوه گرفته تا استفاده از بهترین تجهیزات،
                        همه چیز در کافه دلنشین با هدف ارائه تجربه‌ای ناب از نوشیدن قهوه طراحی شده است.
                        ما در کافه دلنشین باور داریم که قهوه فقط یک نوشیدنی نیست؛ بلکه یک سفر است.
                        یک سفر از طعم‌های مختلف، عطرهای دلنشین و لحظه‌های خوب که در کنار دوستان و عزیزانتان به یاد خواهید سپرد.
                        همینطور که در هر فنجان قهوه به دنبال بهترین طعم‌ها هستیم،
                        در هر گوشه کافه نیز فضایی برای آرامش و الهام‌بخشی برای شما فراهم کرده‌ایم.
                        از روز اول، ما تصمیم گرفتیم که هر تجربه‌ی قهوه‌ای را به یک خاطره تبدیل کنیم.
                        جایی که هر روزش پر از لبخند، گفت‌وگو و البته یک فنجان قهوه عالی است.
                    </p>
                </div>
                <div className="admins-sec flex flex-col lg:flex-row justify-evenly items-center w-3/4 h-fit">
                    <AdminComponent name="رضا سیدنژاد" image={unknown} info="مدیر عامل" />
                    <AdminComponent name="جین اسمیت" image={unknown} info="مسئول بهداشت" />
                    <AdminComponent name="آلیس جانسون" image={unknown} info="مسئول خرید و فروش" />
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}