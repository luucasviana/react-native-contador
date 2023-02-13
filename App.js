import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReminderClone = () => {
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const next15th = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 15);
            const timeDiff = next15th - currentDate;
  
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
        setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);
    return () => clearInterval(interval);
    }, 
[]);
    
    return (
        <View style={styles.container}>
            <Text style={styles.reminderInt}>Faltam:</Text>
            <View style={styles.countdownContainer}>
                <Text style={styles.countdownText}>{timeLeft.days}</Text>
                <Text style={styles.countdownLabel}>dias</Text>
            </View>
            <View style={styles.countdownContainer}>
                <Text style={styles.countdownText}>{timeLeft.hours}</Text>
                <Text style={styles.countdownLabel}>horas</Text>
            </View>
            <View style={styles.countdownContainer}>
                <Text style={styles.countdownText}>{timeLeft.minutes}</Text>
                <Text style={styles.countdownLabel}>minutos</Text>
            </View>
            <View style={styles.countdownContainer}>
                <Text style={styles.countdownText}>{timeLeft.seconds}</Text>
                <Text style={styles.countdownLabel}>segundos</Text>
            </View>
            <Text style={styles.reminderText}>para o próximo dia 15!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#E9967A', 
    },
    countdownContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E9967A', 
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    countdownText: {
        fontSize: 36,
        color: '#000000',
    },
    countdownLabel: {
        fontSize: 18,
        color: '#000000',
    },
    reminderText: {
        fontSize: 18,
        color: '#000000', 
        marginTop: 20,
    },
    reminderInt: {
        fontSize: 40,
        color: '#000000',
        marginTop: 20,
    }
});

export default ReminderClone;
