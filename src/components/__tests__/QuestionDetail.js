import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

describe("The Question Detail Component", () => {
  describe("The Container Element", () => {
    describe("mapStateToProps", () => {
      it("should map the state to props coorrectly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Space is big",
        };
        const appState = {
          questions: [sampleQuestion],
        };
        const ownProps = {
          question_id: 42,
        };
        const componentState = mapStateToProps(appState, ownProps);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });
  describe("The display element", () => {
    it("Should not regress", () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="The meaning of thanks"
          body="43"
          answer_count={0}
          tags={["hitchhiking"]}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
