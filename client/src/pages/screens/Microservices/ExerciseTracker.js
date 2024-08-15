import React, { useState } from 'react';
import Container from "../../components/Container"
import AddExercise from '../../components/microservices/exercise-tracker/AddExercise';
import TrackGuide from '../../components/microservices/exercise-tracker/TrackerGuide';
import TrackerInfo from '../../components/microservices/exercise-tracker/TrackerInfo';


const ExerciseTracker = () => {
    return (
        <Container title="Exercise Tracker" subtitle="Track user's activity">
            <AddExercise />
            <TrackGuide />
        </Container>
    )
}

export default ExerciseTracker