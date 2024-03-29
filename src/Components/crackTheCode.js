import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function CrackTheCode() {
  const [userInput, handleUserInput] = useState("");
  const [storeRandomNumber, handleStoreRandomNumber] = useState([]);
  const [storeUserInput, handleStoreUserInput] = useState([]);
  const [generatebtnClicked, setGeneratebtnClicked] = useState(false);

  // To handle display of userInput number after check button clicked.
  const [userInputDisplay, handleUserInputDisplay] = useState(false);

  // To display score of a user, which is gained at the end of game.
  const [display, handleDisplay] = useState(true);

  // Handle className property of userinput number.
  // Based on result of checking the presence of each individual digit,respective CSS is applied.
  const [classNameFirstDigit, handleclassNameFirstDigit] = useState(false);
  const [classNameSecondDigit, handleclassNameSecondDigit] = useState(false);
  const [classNameThirdDigit, handleclassNameThirdDigit] = useState(false);
  const [classNameFourthDigit, handleclassNameFourthDigit] = useState(false);

  // Handle id property of userinput number.
  // Based on result of checking the presence of each individual digit,respective CSS is applied.
  const [idOfFirstDigit, handleIdFirstDigit] = useState(false);
  const [idOfSecondDigit, handleIdSecondDigit] = useState(false);
  const [idOfThirdDigit, handleIdThirdDigit] = useState(false);
  const [idOfFourthDigit, handleIdFourthDigit] = useState(false);

  // Declaring a state to track number of times check button is clicked.
  // Display points if a user cracks the code correctly, depending on no.of times button clicked.
  const [checkButtonClick, handleCheckButtonClick] = useState(1);

  // To store score of a user, which is gained at the end of game.
  const [score, handleScore] = useState(10);

  // Number of attempts remained
  const [attempts, setAttempts] = useState(5);

  // Generating a random number using math.random()
  const GenerateNumber = () => {
    let numberGenerated = 0;

    while (true) {
      numberGenerated = Math.floor(Math.random() * 9000) + 1000;

      // Convert the number to a string and split it into an array of digits
      const digits = String(numberGenerated).split("");

      // Use a Set to remove duplicate digits
      const uniqueDigits = new Set(digits);

      // Check if the number has 4 unique digits
      if (uniqueDigits.size === 4) {
        break;
      }
    }

    // Convert the generated number back to a string
    const numberString = String(numberGenerated);

    // Store the generated number in the state
    handleStoreRandomNumber(numberString);
    setGeneratebtnClicked(true);
    alert("Number is generated. GOOD LUCK!!!");
  };

  const checkInput = () => {
    if (userInput.length < 4) {
      alert("Enter 4-digit Number");
    } else if (/[^\d]/.test(userInput)) {
      alert("Special characters are not allowed. Enter only digits.");
    } else {
      // Breaking the input number by user and storing it in a array
      handleStoreUserInput(`${userInput}`);

      //Convert array that is used to storedrandom number stored into string
      let randomNumberToString = storeRandomNumber.toString();

      // To handle display of userInput number after check button clicked.
      handleUserInputDisplay(true);

      // Checks whether the each digit of number entered by user is included in
      // random number generated.
      if (randomNumberToString.includes(userInput[0])) {
        handleclassNameFirstDigit(true);
      } else {
        handleclassNameFirstDigit(false);
      }

      if (randomNumberToString.includes(userInput[1])) {
        handleclassNameSecondDigit(true);
      } else {
        handleclassNameSecondDigit(false);
      }

      if (randomNumberToString.includes(userInput[2])) {
        handleclassNameThirdDigit(true);
      } else {
        handleclassNameThirdDigit(false);
      }

      if (randomNumberToString.includes(userInput[3])) {
        handleclassNameFourthDigit(true);
      } else {
        handleclassNameFourthDigit(false);
      }

      // Checks whether the each digit of number entered by user matches with random number generated.
      if (storeRandomNumber[0] === userInput[0]) {
        handleIdFirstDigit(true);
      } else {
        handleIdFirstDigit(false);
      }

      if (storeRandomNumber[1] === userInput[1]) {
        handleIdSecondDigit(true);
      } else {
        handleIdSecondDigit(false);
      }

      if (storeRandomNumber[2] === userInput[2]) {
        handleIdThirdDigit(true);
      } else {
        handleIdThirdDigit(false);
      }

      if (storeRandomNumber[3] === userInput[3]) {
        handleIdFourthDigit(true);
      } else {
        handleIdFourthDigit(false);
      }

      // Decrease attemmpts count
      setAttempts((prevCount) => prevCount - 1);

      // Setting a count to increment on each click of 'check' button
      handleCheckButtonClick((prevCount) => prevCount + 1);

      // If user cracks the code in 1st attempt
      if (
        checkButtonClick === 1 &&
        storeRandomNumber[0] === userInput[0] &&
        storeRandomNumber[1] === userInput[1] &&
        storeRandomNumber[2] === userInput[2] &&
        storeRandomNumber[3] === userInput[3]
      ) {
        handleDisplay(false);
        handleScore(10);
      }

      // If user cracks the code in 2nd attempt
      else if (
        checkButtonClick === 2 &&
        storeRandomNumber[0] === userInput[0] &&
        storeRandomNumber[1] === userInput[1] &&
        storeRandomNumber[2] === userInput[2] &&
        storeRandomNumber[3] === userInput[3]
      ) {
        handleDisplay(false);
        handleScore(9);
      }

      // If user cracks the code in 3rd attempt
      else if (
        checkButtonClick === 3 &&
        storeRandomNumber[0] === userInput[0] &&
        storeRandomNumber[1] === userInput[1] &&
        storeRandomNumber[2] === userInput[2] &&
        storeRandomNumber[3] === userInput[3]
      ) {
        handleDisplay(false);
        handleScore(8);
      }

      // If user cracks the code in 4th attempt
      else if (
        checkButtonClick === 4 &&
        storeRandomNumber[0] === userInput[0] &&
        storeRandomNumber[1] === userInput[1] &&
        storeRandomNumber[2] === userInput[2] &&
        storeRandomNumber[3] === userInput[3]
      ) {
        handleDisplay(false);
        handleScore(7);
      }

      // If user cracks the code in 5th attempt
      else if (
        checkButtonClick === 5 &&
        storeRandomNumber[0] === userInput[0] &&
        storeRandomNumber[1] === userInput[1] &&
        storeRandomNumber[2] === userInput[2] &&
        storeRandomNumber[3] === userInput[3]
      ) {
        handleDisplay(false);
        handleScore(6);
      }

      // If user does not match the numbers after final attempt.
      else if (
        checkButtonClick === 5 &&
        (storeRandomNumber[0] !== userInput[0] ||
          storeRandomNumber[1] !== userInput[1] ||
          storeRandomNumber[2] !== userInput[2] ||
          storeRandomNumber[3] !== userInput[3])
      ) {
        handleDisplay(false);
        handleScore(0);
      } else {
        handleDisplay(true);
      }
    }
  };

  // if a user wants to re-match
  const rematch = () => {
    handleDisplay(!display);
    setGeneratebtnClicked(false);
    setAttempts(5);
    handleScore(10);
    handleStoreRandomNumber([]);
    handleUserInput([]);
    handleUserInputDisplay(false);
    handleCheckButtonClick(1);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    // Only allow 4-digit numbers

    if (/^\d{0,4}$/.test(value)) {
      handleUserInput(value);
    }
  };

  const Back = () => {
    setGeneratebtnClicked(false);
    setAttempts(5);
    handleScore(10);
    handleUserInput([]);
    handleUserInputDisplay(false);
    handleCheckButtonClick(1);
  };

  return (
    <div id="display">
      {display ? (
        <>
          {generatebtnClicked ? (
            <div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Crack The Code</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Four Digits from 0-9"
                    value={userInput}
                    onChange={handleOnChange}
                  />
                </Form.Group>
              </Form>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Button variant="secondary" onClick={Back}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    id="checkbutton"
                    onClick={checkInput}
                  >
                    Check
                  </Button>
                  &nbsp;
                </div>
                <h6>
                  No.of Attempts Remaining: <b>{attempts}</b>
                </h6>
              </div>

              <div
                className={
                  userInputDisplay
                    ? "userInputDisplayActive"
                    : "userInputDisplayNotActive"
                }
              >
                <h3
                  className={
                    classNameFirstDigit ? "digitIncluded" : "digitNotIncluded"
                  }
                  id={idOfFirstDigit ? "digitMatched" : null}
                >
                  {storeUserInput[0]}
                </h3>
                <h3
                  className={
                    classNameSecondDigit ? "digitIncluded" : "digitNotIncluded"
                  }
                  id={idOfSecondDigit ? "digitMatched" : null}
                >
                  {storeUserInput[1]}
                </h3>
                <h3
                  className={
                    classNameThirdDigit ? "digitIncluded" : "digitNotIncluded"
                  }
                  id={idOfThirdDigit ? "digitMatched" : null}
                >
                  {storeUserInput[2]}
                </h3>
                <h3
                  className={
                    classNameFourthDigit ? "digitIncluded" : "digitNotIncluded"
                  }
                  id={idOfFourthDigit ? "digitMatched" : null}
                >
                  {storeUserInput[3]}
                </h3>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <Button variant="success" onClick={GenerateNumber}>
                Generate Number
              </Button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h2 id="pointsGained">
            You have Won: <br /> &nbsp;{score} Points
          </h2>
          <Button variant="info" onClick={rematch}>
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
}
export default CrackTheCode;
