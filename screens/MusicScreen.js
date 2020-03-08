import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';

export default function MusicScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.helpContainer}>
                    <SearchBar placeholder = 'Search music...'
                    style = {
                        styles.searchBar
                    }
                    platform = {
                        'ios'
                    }
                    round = {
                        true
                    }
                    containerStyle = {
                        {
                            backgroundColor: 'transparent',
                            width: 310,
                            borderWidth: 0,

                        }
                    }
                    inputContainerStyle = {
                        {
                            borderRadius: 20
                        }
                    }
                    cancelButtonTitle = {
                        true
                    }
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
                    clearIcon = {
                        true
                    }
                    />
                </View>
                <View style={styles.madeForYou}>
                    <Text style={styles.headerText}>made for you</Text>

                    {/* scrolling liked Albums */}
                    <View style={styles.Albums}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/roddy-ricch-2vu-please-excuse-me-for-being-antisocial-dee-310x310.jpg' }} style={styles.albumImages} />

                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/09/taylor-swift-70p-lover-a0i-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/11/soundtrack-000-frozen-ii-yhp-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/10/summer-walker-1sj-over-it-dlk-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2017/10/billie-eilish-1e3-dont-smile-at-me-hbg-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/camila-cabello-p0o-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2018/06/juice-wrld-f0a-310x310.jpg' }} style={styles.albumImages} />

                        </ScrollView>
                    </View>
                </View>
                <View style={styles.madeForYou}>
                    <Text style={styles.headerText}>Favourite Artists</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2007/12/maroon-5-9st.jpg?1' }} style={styles.artistImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2010/12/nicki-minaj-thi.jpg?1' }} style={styles.artistImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2005/12/eminem-1xq.jpg?1' }} style={styles.artistImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2012/11/kendrick-lamar-h1y.jpg?1' }} style={styles.artistImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2006/12/beyonce-000-artist-chart-cci.jpg?1' }} style={styles.artistImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2007/12/luke-bryan-kl4.jpg?1' }} style={styles.artistImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2006/12/chris-brown-cte.jpg?1' }} style={styles.artistImages} />

                    </ScrollView>
                </View>

                <View style={styles.madeForYou}>
                    <Text style={styles.headerText}>Hot trend</Text>

                    {/* scrolling liked Albums */}
                    <View style={styles.Albums}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/roddy-ricch-2vu-please-excuse-me-for-being-antisocial-dee-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/09/taylor-swift-70p-lover-a0i-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/11/soundtrack-000-frozen-ii-yhp-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/10/summer-walker-1sj-over-it-dlk-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2017/10/billie-eilish-1e3-dont-smile-at-me-hbg-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/camila-cabello-p0o-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2018/06/juice-wrld-f0a-310x310.jpg' }} style={styles.albumImages} />
                        </ScrollView>
                    </View>
                    </View>
                        <View style={styles.madeForYou}>
                        <Text style={styles.headerText}>Hip Hop</Text>

                        {/* scrolling liked Albums */}
                        <View style={styles.Albums}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/roddy-ricch-2vu-please-excuse-me-for-being-antisocial-dee-310x310.jpg' }} style={styles.albumImages} />
                            <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/09/taylor-swift-70p-lover-a0i-310x310.jpg' }} style={styles.albumImages} />
                            <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/11/soundtrack-000-frozen-ii-yhp-310x310.jpg' }} style={styles.albumImages} />
                            <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/10/summer-walker-1sj-over-it-dlk-310x310.jpg' }} style={styles.albumImages} />
                            <Image source={{ uri: 'https://charts-static.billboard.com/img/2017/10/billie-eilish-1e3-dont-smile-at-me-hbg-310x310.jpg' }} style={styles.albumImages} />
                            <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/camila-cabello-p0o-310x310.jpg' }} style={styles.albumImages} />
                            <Image source={{ uri: 'https://charts-static.billboard.com/img/2018/06/juice-wrld-f0a-310x310.jpg' }} style={styles.albumImages} />
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.madeForYou}>
                    <Text style={styles.headerText}>R&B</Text>

                    {/* scrolling liked Albums */}
                    <View style={styles.Albums}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/roddy-ricch-2vu-please-excuse-me-for-being-antisocial-dee-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/09/taylor-swift-70p-lover-a0i-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/11/soundtrack-000-frozen-ii-yhp-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/10/summer-walker-1sj-over-it-dlk-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2017/10/billie-eilish-1e3-dont-smile-at-me-hbg-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/camila-cabello-p0o-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2018/06/juice-wrld-f0a-310x310.jpg' }} style={styles.albumImages} />
                        </ScrollView>
                    </View>
                    </View>
                    <View style={styles.madeForYou}>
                    <Text style={styles.headerText}>New Releases For You</Text>

                    {/* scrolling liked Albums */}
                    <View style={styles.Albums}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/roddy-ricch-2vu-please-excuse-me-for-being-antisocial-dee-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/09/taylor-swift-70p-lover-a0i-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/11/soundtrack-000-frozen-ii-yhp-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/10/summer-walker-1sj-over-it-dlk-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2017/10/billie-eilish-1e3-dont-smile-at-me-hbg-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2019/12/camila-cabello-p0o-310x310.jpg' }} style={styles.albumImages} />
                        <Image source={{ uri: 'https://charts-static.billboard.com/img/2018/06/juice-wrld-f0a-310x310.jpg' }} style={styles.albumImages} />
                        </ScrollView>
                    </View>
                    </View>
            </ScrollView>
        </View>
    );
}

MusicScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    artistImages: {
        width: 90,
        height: 90,
        marginRight: 7,
        borderRadius: 50
    },
    headerText: {
        margin: 10,
        textTransform:"capitalize",
    },
    albumImages: {
        width: 100,
        height: 100,
        marginRight: 15,
        borderRadius: 10
    },
    madeForYou: {
        marginLeft: 10,
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
