import * as React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';


export default function MovieScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.helpContainer}>
                    <SearchBar placeholder='Search movies...'
                               style={
                                   styles.searchBar
                               }
                               platform={
                                   'ios'
                               }
                               round={
                                   true
                               }
                               containerStyle={
                                   {
                                       backgroundColor: 'transparent',
                                       width: 290,
                                       borderWidth: 0,

                        }
                    }
                    inputContainerStyle = {
                        {
                        borderRadius: 20
                        }
                    }
                    cancelButtonTitle = {true}
                    inputStyle = {
                        {
                        backgroundColor: 'lightgrey',
                        fontSize: 14,
                        paddingLeft: 5
                        }
                    }
                    lightTheme = {
                        true
                    }
                    clearIcon={true}
                    />
                </View>
                <View style={styles.featuredMovies}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity onPress={navigation.navigate('Home')}>
                            <Image
                                source={{uri: 'https://fanart.tv/detailpreview/fanart/tv/364093/tvthumb/star-trek-picard-5e2bcbcd25756.jpg'}}
                                style={styles.featuredMovieImages}/>
                        </TouchableOpacity>

                        <Image
                            source={{uri: 'https://fanart.tv/detailpreview/fanart/tv/295760/tvthumb/dcs-legends-of-tomorrow-58a073b3c0df8.jpg'}}
                            style={styles.featuredMovieImages}/>
                        <Image
                            source={{uri: 'https://fanart.tv/detailpreview/fanart/tv/372081/tvthumb/hunters-5e14697b2dd38.jpg'}}
                            style={styles.featuredMovieImages}/>
                        <Image
                            source={{uri: 'https://fanart.tv/detailpreview/fanart/tv/277366/tvthumb/jim-hensons-creature-shop-challenge-5e5a2f5bafe28.jpg'}}
                            style={styles.featuredMovieImages}/>
                        <Image
                            source={{uri: 'https://fanart.tv/detailpreview/fanart/tv/332331/tvthumb/altered-carbon-5a7446a30d1e7.jpg'}}
                            style={styles.featuredMovieImages}/>
                        <Image
                            source={{uri: 'https://fanart.tv/detailpreview/fanart/tv/354265/tvthumb/deputy-5e4ea71403932.jpg'}}
                            style={styles.featuredMovieImages}/>
                        <Image
                            source={{uri: 'https://walter.trakt.tv/images/movies/000/322/988/posters/thumb/b2fa5f3d6c.jpg.webp'}}
                            style={styles.featuredMovieImages}/>
                    </ScrollView>
                </View>

                <View style={styles.recentMovies}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                       <Text style={styles.BoldText}>Recommended</Text><Text style={styles.greyText}> Movies</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Image source={{uri: 'https://walter.trakt.tv/images/movies/000/307/054/posters/thumb/ab1a43b360.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/360/095/posters/thumb/25b1652585.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/211/394/posters/thumb/3d953c303e.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/277/572/posters/thumb/770740180b.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/306/046/posters/thumb/660bc9e167.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/301/015/posters/thumb/77cebb5f45.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/322/988/posters/thumb/b2fa5f3d6c.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.recentMovies}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                       <Text style={styles.BoldText}>Recent</Text><Text style={styles.greyText}> Movies</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Image source={{uri: 'https://walter.trakt.tv/images/movies/000/307/054/posters/thumb/ab1a43b360.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/360/095/posters/thumb/25b1652585.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/211/394/posters/thumb/3d953c303e.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/277/572/posters/thumb/770740180b.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/306/046/posters/thumb/660bc9e167.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/301/015/posters/thumb/77cebb5f45.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/322/988/posters/thumb/b2fa5f3d6c.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.recentMovies}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                       <Text style={styles.BoldText}>Popular</Text><Text style={styles.greyText}> Movies</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Image source={{uri: 'https://walter.trakt.tv/images/movies/000/307/054/posters/thumb/ab1a43b360.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/360/095/posters/thumb/25b1652585.jpg.webp'}} style={styles.nowPlayingMovieImages}/>
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/211/394/posters/thumb/3d953c303e.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/277/572/posters/thumb/770740180b.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/306/046/posters/thumb/660bc9e167.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/301/015/posters/thumb/77cebb5f45.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                            <Image source={{ uri: 'https://walter.trakt.tv/images/movies/000/322/988/posters/thumb/b2fa5f3d6c.jpg.webp' }} style={styles.nowPlayingMovieImages} />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

MovieScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    nowPlayingMovieImages: {
        width: 80,
        height: 120,
        marginRight: 7,
        borderRadius: 10
    },
    BoldText: {
        color: "black",
        fontWeight: "bold",
        paddingBottom: 8
    },
    greyText: {
        color: 'grey',
    },
    recentMovies: {
        marginLeft: 5,
        marginBottom: 7
    },
    featuredMovies: {
        marginLeft: 5,
        marginBottom: 7
    },
    featuredMovieImages: {
        width: 200,
        height: 100,
        marginRight: 10,
        borderRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
