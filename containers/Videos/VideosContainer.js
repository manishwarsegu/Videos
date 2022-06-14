import React, { useEffect, useState } from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import VideoPlayer from 'react-native-video-player';

function VideosScreen({ navigation }) {
    const [videosData, setVideosData] = useState([]);
    const [videoModal, setVideoModal] = useState(false);
    const [videoURL, setVideoURL] = useState('');
    const [videoTitle, setVideoTitle] = useState('');

    useEffect(() => {
        fetchVideoData();
    }, []);

    const fetchVideoData = () => {
        axios({
            method: 'get',
            url: 'https://private-c31a5-task27.apiary-mock.com/videos',
        }).then((response) => {
            setVideosData(response.data.videos);
        });
    }

    const setVideoModalData = (videoUrl, title) => {
        setVideoModal(!videoModal);
        setVideoURL(videoUrl);
        setVideoTitle(title);
    }

    const Item = ({ title, thumbnail_url, video_url }) => {
        return (
            // <TouchableOpacity onPress={() => setVideoModalData(video_url, title)} style={styles.item}>
            //     <FastImage
            //         source={{ uri: thumbnail_url }}
            //         resizeMode="contain"
            //         style={styles.thumbnail}
            //     />
            //     
            // </TouchableOpacity>
            <>
            <VideoPlayer
                video={{ uri: video_url }}
                videoWidth={1600}
                videoHeight={900}
                thumbnail={{ uri: thumbnail_url }}
                endThumbnail={{ uri: thumbnail_url }}
                showDuration={true}
                fullScreenOnLongPress={true}
            />
            <Text style={styles.title}>{title.toUpperCase()}</Text>
            </>
        )
    };

    const renderItem = ({ item }) => {
        return (
            <Item title={item.title} thumbnail_url={item.thumbnail_url} video_url={item.video_url} />
        )
    };

    let listVideos;
    if (Array.isArray(videosData)) {
        listVideos = (
            <FlatList
                data={videosData}
                refreshing={false}
                onRefresh={fetchVideoData}
                renderItem={renderItem}
                keyExtractor={(item, i) => i}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {listVideos}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        // backgroundColor: '#0076C7',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    thumbnail: {
        height: 200,
        width: 350,
    }
});

export default VideosScreen;