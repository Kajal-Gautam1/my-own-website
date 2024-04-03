import Header from "../common/header";

export default function WebsiteLayoutComponent({ children }) {
    return (
      <div>
        <Header/>
        <main>{children}</main>
      </div>
    );
  }