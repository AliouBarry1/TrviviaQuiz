import AnswerChoices from "./AnswerChoices";

function Question(props) {
  return (
    <div>
      {props.questioner}
      <AnswerChoices Answer={"Enter"} />
    </div>
  );
}

export default Question;
