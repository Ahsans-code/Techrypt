// InfluencePerformance.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Mobilenav.css";

const Mobilenav = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");
    const tabs = [
        { id: "About", label: "About", path: "/About" },
        { id: "performance", label: "Performance", path: "/Performance" },
        { id: "Creative", label: "Creative", path: "/Creative" },
        { id: "work", label: "Work", path: "/Work" },
    ];

    useEffect(() => {
        // Set active tab based on current path
        const currentTab = tabs.find(tab => location.pathname.includes(tab.path));
        if (currentTab) {
            setActiveTab(currentTab.id);
        }
    }, [location.pathname]);

    return (
        <div className="influence-performance-container">
            <div className="tabs-wrapper">
                {tabs.map((tab) => (
                    <Link
                        to={`${tab.path}`}
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Mobilenav;