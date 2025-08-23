import axiosInstance from "../axios";
import { useEffect, useState } from 'react';
import './FeedNewsPage.css';

export const FeedNewsPage = () => {
    const [news, setNews] = useState(null);
    const [selectedNew, setSelectedNew] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axiosInstance.get('/RSSFeed');
                setNews(result.data);
            } catch (error) {
                console.log("Error fetching news:", error);
            }
        };
        fetchData();
    }, []);

    const handleClose = () => {
        setSelectedNew(null);
    };

    return (
        <div className="page" dir="rtl">
            <header className="header">
                <div className="header-content">
                    <img
                        src="/list-ul-alt-svgrepo-com.svg"
                        width={30}
                        height={30}
                        alt="news icon"
                        unoptimized
                    />
                    <h1>רשימת החדשות של רן בר-זיק</h1>
                </div>
            </header>
            <div className="main-container" dir="rtl">
                <div className="news-container">
                    {
                        news && news.map((item, index) => (
                            <div
                                key={index}
                                className={`news-item ${selectedNew === item ? 'active' : ''}`}
                                onClick={() => setSelectedNew(item)}
                            >
                                <div className="title-container">
                                    <img
                                        src="/hand-point-left-svgrepo-com.svg"
                                        width={30}
                                        height={30}
                                        alt="news icon"
                                    />
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="news">
                    {
                        selectedNew ? (
                            <div>
                                <h2 className="title-new">{selectedNew.title}</h2>
                                <button className="close-button" onClick={handleClose}>
                                    ✖
                                </button>
                                <div className="summary-new">
                                    <div dangerouslySetInnerHTML={{ __html: selectedNew.summary }} />
                                </div>
                                <p className="link-new"><a href={selectedNew.link} target="_blank">{"קרא עוד->"}</a></p></div>
                        ) : (
                            <div className="placeholder-container">
                                <img
                                    src="/warning-circle-svgrepo-com.svg"
                                    width={30}
                                    height={30}
                                    alt="news icon"
                                />
                                <p className="placeholder">לא נבחרה חדשה, לבחירה לחץ על החדשה הרצויה</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
