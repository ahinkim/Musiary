import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import ApiRequest from "../util/ApiRequest";

export default function Auth(Component) {
  function Authentication(props) {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
      (async () => {
        try {
          const res = await ApiRequest.server.get("/user");

          if (res.status !== 200) {
            history.push("/login");
            return;
          }

          setLoading(false);
        } catch (err) {
          history.push("/login");
        }
      })();

      return () => setLoading(false);
    }, []);

    return !loading ? <Component {...props} /> : <div>로딩중...</div>;
  }
  return Authentication;
}
