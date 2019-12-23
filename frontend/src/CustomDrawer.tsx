import React from "react";
import { Drawer, Button, message, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/rootReducer";
import { toggleDrawerOff, changeAnswer } from "./redux/slices/drawerSlice";
import FetchFacade from "./rest/FetchFacade";

interface Props {}

export const CustomDrawer: React.FC<Props> = () => {
  const { toggle, answers } = useSelector((state: RootState) => state.drawer);
  const { answer1, answer2, answer3, answer4, answer5 } = answers;
  const dispatch = useDispatch();
  return (
    <Drawer
      title="Feedback Schema"
      placement="right"
      closable={false}
      onClose={() => dispatch(toggleDrawerOff())}
      visible={toggle}
      width={480}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "8px"
          }}
        >
          <p style={{ margin: "0", alignSelf: "center" }}>
            Do you like the website design?
          </p>
          <Rate
            value={answer1}
            onChange={value =>
              dispatch(changeAnswer({ id: "answer1", content: value }))
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "8px"
          }}
        >
          <p style={{ margin: "0", alignSelf: "center" }}>
            Do you like the navigation?
          </p>
          <Rate
            value={answer2}
            onChange={value =>
              dispatch(changeAnswer({ id: "answer2", content: value }))
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "8px"
          }}
        >
          <p style={{ margin: "0", alignSelf: "center" }}>
            Do you like our computers?
          </p>
          <Rate
            value={answer3}
            onChange={value =>
              dispatch(changeAnswer({ id: "answer3", content: value }))
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "8px"
          }}
        >
          <p style={{ margin: "0", alignSelf: "center" }}>
            Do you like our website?
          </p>
          <Rate
            value={answer4}
            onChange={value =>
              dispatch(changeAnswer({ id: "answer4", content: value }))
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "8px"
          }}
        >
          <p style={{ margin: "0", alignSelf: "center" }}>
            Do you like our cart?
          </p>
          <Rate
            value={answer5}
            onChange={value =>
              dispatch(changeAnswer({ id: "answer5", content: value }))
            }
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            FetchFacade.postFeedback({
              answer1,
              answer2,
              answer3,
              answer4,
              answer5
            }).then(res => {
              if (res.status) {
                dispatch(toggleDrawerOff());
                message.success(res.message);
              }
            });
          }}
        >
          Submit
        </Button>
      </div>
    </Drawer>
  );
};
