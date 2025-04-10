import * as React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button, Space, Typography } from "antd";
import { Theme, PreferencesContext } from "api/contexts/Preferences";
import Search from "components/Search";
import { Tracker } from "components/utils/analytics";

const { Text, Title } = Typography;

const Banner: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = React.useContext(PreferencesContext);

	/*
		linear-gradient(rgba(21, 172, 178, 1), rgba(15, 103, 65, 0.15)),
		backgroundImage: "url(/home-banner.jpg)",
		backgroundPosition: "center center",
		backgroundAttachment: "fixed",
	
	*/
  return (
    <div
      className="home-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "-12px -12px 12px -12px",
        background: theme === Theme.DARK ? "#00c3b6" : "#00c3b6",
        padding: "40px 0"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "18px",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <img
          alt="Nano block explorer"
          height="40px"
          src={`/nano-${theme === Theme.DARK ? "dark" : "light"}.png`}
          style={{ marginRight: "12px" }}
        />
        <Title
          level={3}
          style={{
            display: "inline-block",
            color: "#fff",
            margin: 0,
            fontWeight: 200,
            fontSize: "28px",
            whiteSpace: "nowrap",
          }}
        >
          {t("common.blockExplorer")}
        </Title>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <Search isHome />
      </div>

      <Space size={[6, 12]} wrap style={{ justifyContent: "center" }}>
        <a href="http://paw.digital">
          <Button ghost>{t("menu.whatIsNano")}</Button>
        </a>
     </Space>
    </div>
  );
};

export default Banner;
