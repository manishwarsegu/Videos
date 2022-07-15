import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

const x = 'cross';
const y = 'circle';
const initialArray = Array(9).fill("question");

function ticTacToe() {
    const [isCross, setIsCross] = useState(true);
    const [board, setBoard] = useState(initialArray);
    const [color, setColor] = useState([])

    const drawItem = (number) => {
        if (board[number] == "question" && winGame() == "") {
            if (isCross) {
                board[number] = x;
            }
            else {
                board[number] = y;
            }

            setIsCross(!isCross);
            chooseItemColor(number);

            //calling wingame again as board values are updated in above if else
            const checkWinGame = winGame();
            if (checkWinGame === "draw") {
                Alert.alert('It\'s a draw!');
            } else if(checkWinGame !== "") {
                Alert.alert(`${checkWinGame.toUpperCase()} Won The Game`)
            }
        }
    }

    const resetGame = () => {
        setColor([]);
        setIsCross(true)
        setBoard([...initialArray]); //spreading to create new reference in memory
    }

    const chooseItemColor = (number) => {
        if (board[number] == x) {
            color[number] = "#FF3031";
        }
        else if (board[number] == y) {
            color[number] = "#45CE30";
        }
        else {
            color[number] = "#74B9FF";
        }
    }

    const winGame = () => {
        if (board[0] != "question" && board[0] == board[1] && board[1] == board[2]) {
            return board[0]
        } else if (board[3] != "question" && board[3] == board[4] && board[4] == board[5]) {
            return board[3]
        } else if (board[6] != "question" && board[6] == board[7] && board[7] == board[8]) {
            return board[6]
        } else if (board[0] != "question" && board[0] == board[3] && board[3] == board[6]) {
            return board[0]
        } else if (board[1] != "question" && board[1] == board[4] && board[4] == board[7]) {
            return board[1]
        } else if (board[2] != "question" && board[2] == board[5] && board[5] == board[8]) {
            return board[2]
        } else if (board[0] != "question" && board[0] == board[4] && board[4] == board[8]) {
            return board[0]
        } else if (board[2] != "question" && board[2] == board[4] && board[4] == board[6]) {
            return board[2]
        } else if(board.every(cell => cell != "question" && cell!="")) {
            return "draw";
        } else {
            return ""
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: "#01CBC6", fontSize: 50 }}>Tic Tac Toe</Text>

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(0)}>
                    <Entypo name={board[0]} size={32} color={color[0]} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(1)}>
                    <Entypo name={board[1]} size={32} color={color[1]} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(2)}>
                    <Entypo name={board[2]} size={32} color={color[2]} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(3)}>
                    <Entypo name={board[3]} size={32} color={color[3]} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(4)}>
                    <Entypo name={board[4]} size={32} color={color[4]} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(5)}>
                    <Entypo name={board[5]} size={32} color={color[5]} />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(6)}>
                    <Entypo name={board[6]} size={32} color={color[6]} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(7)}>
                    <Entypo name={board[7]} size={32} color={color[7]} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 30, padding: 20 }} onPress={() => drawItem(8)}>
                    <Entypo name={board[8]} size={32} color={color[8]} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ margin: 30, flexDirection: "row", padding: 20, backgroundColor: "#E74292", width: 200, borderRadius: 20 }} onPress={() => resetGame()}>
                <Entypo name="controller-jump-to-start" size={32} color="#2B2B52" />
                <Text style={{ color: "#2B2B52", fontSize: 20 }}>Restart Game</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ticTacToe;