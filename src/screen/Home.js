import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import normalize from '../helper/normalize';
import {TouchableOpacity} from 'react-native';
import {Alert} from 'react-native';
import {WebView} from 'react-native-webview';

const Home = () => {
  const showAlert = () =>
    Alert.alert(
      'Hello From Soujit',
      'React native Alert',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

  function onMessage(event) {
    alert(event.nativeEvent.data);
  }

  function sendDataToWebView() {
    console.log('hello');
    webviewRef.current.postMessage('Data from Soujit Saha React Native App');
  }

  const webviewRef = useRef();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: normalize(10),
            height: normalize(48),
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/LeftArrow.png')}
              style={{
                height: normalize(18),
                width: normalize(18),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Bold',
              color: '#1D232B',
              fontSize: normalize(17),
            }}>
            자유톡
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/notification.png')}
              style={{
                height: normalize(20),
                width: normalize(18),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingHorizontal: normalize(14),
            marginTop: normalize(17),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/profile1.png')}
                style={{
                  height: normalize(32),
                  width: normalize(32),
                  resizeMode: 'contain',
                }}
              />

              <View style={{marginLeft: normalize(5)}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'NotoSansKR-Bold',
                      color: '#1D232B',
                      fontSize: normalize(12),
                      lineHeight: normalize(14),
                    }}>
                    안녕 나 응애
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#01B99F',
                      height: normalize(12),
                      width: normalize(12),
                      borderRadius: normalize(12 / 2),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: normalize(4),
                    }}>
                    <Image
                      source={require('../assets/icons/Right.png')}
                      style={{
                        height: normalize(6),
                        width: normalize(7),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      fontFamily: 'NotoSansKR-Medium',
                      color: '#919EB6',
                      fontSize: normalize(9),
                      lineHeight: normalize(10),
                    }}>
                    1일전
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: 'Roboto-Light',
                    color: '#919EB6',
                    fontSize: normalize(11),
                  }}>
                  165cm • 53kg
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#01B99F',
                paddingHorizontal: normalize(11),
                paddingVertical: normalize(6),
                borderRadius: normalize(12),
              }}>
              <Text
                style={{
                  fontFamily: 'NotoSansKR-Medium',
                  color: '#fff',
                  fontSize: normalize(10),
                  lineHeight: normalize(11),
                }}>
                팔로우
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Bold',
              color: '#1D232B',
              fontSize: normalize(13),
              lineHeight: normalize(14),
              marginTop: normalize(17),
            }}>
            지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Medium',
              color: '#313B49',
              fontSize: normalize(11),
              lineHeight: normalize(14),
              marginTop: normalize(15),
            }}>
            지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
            혹시 어떤 상품이 제일 괜찮았어?
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Medium',
              color: '#313B49',
              fontSize: normalize(11),
              lineHeight: normalize(14),
              marginTop: normalize(15),
            }}>
            후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
            제일 재밌었다던데 맞아???
          </Text>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Medium',
              color: '#313B49',
              fontSize: normalize(11),
              lineHeight: normalize(14),
              marginTop: normalize(15),
            }}>
            올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
            아닌 사람들 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
            있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: normalize(12),
            }}>
            <View
              style={{
                borderWidth: normalize(0.5),
                borderColor: '#CED3DE',
                backgroundColor: '#F7F8FA',
                borderRadius: normalize(12),
                paddingHorizontal: normalize(10),
                paddingVertical: normalize(3),
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: '#5A6B87',
                  fontSize: normalize(11),
                }}>
                #2023
              </Text>
            </View>
            <View
              style={{
                borderWidth: normalize(0.5),
                borderColor: '#CED3DE',
                backgroundColor: '#F7F8FA',
                borderRadius: normalize(12),
                paddingHorizontal: normalize(10),
                paddingVertical: normalize(3),
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: '#5A6B87',
                  fontSize: normalize(11),
                }}>
                #TODAYISMONDAY
              </Text>
            </View>
            <View
              style={{
                borderWidth: normalize(0.5),
                borderColor: '#CED3DE',
                backgroundColor: '#F7F8FA',
                borderRadius: normalize(12),
                paddingHorizontal: normalize(10),
                paddingVertical: normalize(3),
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: '#5A6B87',
                  fontSize: normalize(11),
                }}>
                #TOP
              </Text>
            </View>
            <View
              style={{
                borderWidth: normalize(0.5),
                borderColor: '#CED3DE',
                backgroundColor: '#F7F8FA',
                borderRadius: normalize(12),
                paddingHorizontal: normalize(10),
                paddingVertical: normalize(3),
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: '#5A6B87',
                  fontSize: normalize(11),
                }}>
                #POPS!
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: normalize(12),
            }}>
            <View
              style={{
                borderWidth: normalize(0.5),
                borderColor: '#CED3DE',
                backgroundColor: '#F7F8FA',
                borderRadius: normalize(12),
                paddingHorizontal: normalize(10),
                paddingVertical: normalize(3),
                marginRight: normalize(7),
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: '#5A6B87',
                  fontSize: normalize(11),
                }}>
                #WOW
              </Text>
            </View>
            <View
              style={{
                borderWidth: normalize(0.5),
                borderColor: '#CED3DE',
                backgroundColor: '#F7F8FA',
                borderRadius: normalize(12),
                paddingHorizontal: normalize(10),
                paddingVertical: normalize(3),
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto-Medium',
                  color: '#5A6B87',
                  fontSize: normalize(11),
                }}>
                #ROW
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: normalize(12)}}>
          <View
            style={{
              backgroundColor: '#EDEEF3',
              height: normalize(400),
              width: '100%',
            }}>
            <TouchableOpacity
              onPress={showAlert}
              style={{
                backgroundColor: '#01B99F',
                paddingVertical: normalize(6),
                borderRadius: normalize(12),
                width: normalize(90),
                alignItems: 'center',
                position: 'absolute',
                zIndex: 999,
                top: normalize(190),
                left: Dimensions.get('window').width / 2.7,
              }}>
              <Text
                style={{
                  fontFamily: 'NotoSansKR-Medium',
                  color: '#fff',
                  fontSize: normalize(10),
                  lineHeight: normalize(11),
                }}>
                Native Alert
              </Text>
            </TouchableOpacity>
            <WebView
              ref={webviewRef}
              style={{backgroundColor: '#EDEEF3'}}
              scalesPageToFit={false}
              mixedContentMode="compatibility"
              onMessage={onMessage}
              source={{
                html: ` 
          <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </head>
          <body
            style="
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            "
          >
            
            <script>
              const sendDataToReactNativeApp = async () => {
                window.ReactNativeWebView.postMessage('Data from WebView / Website');
              };
              document.addEventListener("message", message => {
                alert(message.data) 
              });
            </script>
          </body>
        </html>        
`,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: normalize(10),
              paddingHorizontal: normalize(14),
              justifyContent: 'space-between',
              borderBottomWidth: normalize(2),
              borderBottomColor: '#F7F8FA',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/icons/love.png')}
                  style={{
                    height: normalize(22),
                    width: normalize(22),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: '#919EB6',
                  fontSize: normalize(10),
                  marginHorizontal: normalize(6),
                }}>
                5
              </Text>

              <TouchableOpacity>
                <Image
                  source={require('../assets/icons/mag.png')}
                  style={{
                    height: normalize(22),
                    width: normalize(22),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: '#919EB6',
                  fontSize: normalize(10),
                  marginHorizontal: normalize(6),
                }}>
                5
              </Text>
              <TouchableOpacity style={{marginRight: normalize(20)}}>
                <Image
                  source={require('../assets/icons/tag.png')}
                  style={{
                    height: normalize(22),
                    width: normalize(22),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/icons/threedot.png')}
                  style={{
                    height: normalize(3),
                    width: normalize(12),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => sendDataToWebView()}
              style={{
                backgroundColor: '#01B99F',
                paddingVertical: normalize(6),
                borderRadius: normalize(12),
                width: normalize(70),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'NotoSansKR-Medium',
                  color: '#fff',
                  fontSize: normalize(10),
                  lineHeight: normalize(11),
                }}>
                WV Alert
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: normalize(14),
            marginTop: normalize(12),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/icons/profile1.png')}
              style={{
                height: normalize(32),
                width: normalize(32),
                resizeMode: 'contain',
              }}
            />

            <View style={{marginLeft: normalize(5)}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontFamily: 'NotoSansKR-Bold',
                    color: '#1D232B',
                    fontSize: normalize(12),
                    lineHeight: normalize(14),
                  }}>
                  안녕 나 응애
                </Text>
                <View
                  style={{
                    backgroundColor: '#01B99F',
                    height: normalize(12),
                    width: normalize(12),
                    borderRadius: normalize(12 / 2),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: normalize(4),
                  }}>
                  <Image
                    source={require('../assets/icons/Right.png')}
                    style={{
                      height: normalize(6),
                      width: normalize(7),
                      resizeMode: 'contain',
                    }}
                  />
                </View>

                <Text
                  style={{
                    fontFamily: 'NotoSansKR-Medium',
                    color: '#919EB6',
                    fontSize: normalize(9),
                    lineHeight: normalize(10),
                  }}>
                  1일전
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/threedot.png')}
              style={{
                height: normalize(3),
                width: normalize(12),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft: normalize(51), paddingRight: normalize(14)}}>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Regular',
              color: '#313B49',
              fontSize: normalize(10),
            }}>
            어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
            아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
            기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
            올라온다고 하니 꼭 봐주세용~!
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/love.png')}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                color: '#919EB6',
                fontSize: normalize(10),
                marginHorizontal: normalize(6),
              }}>
              5
            </Text>

            <TouchableOpacity>
              <Image
                source={require('../assets/icons/mag.png')}
                style={{
                  height: normalize(20),
                  width: normalize(20),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                color: '#919EB6',
                fontSize: normalize(10),
                marginHorizontal: normalize(6),
              }}>
              5
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: normalize(14),
              marginTop: normalize(12),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../assets/icons/profile2.png')}
                style={{
                  height: normalize(32),
                  width: normalize(32),
                  resizeMode: 'contain',
                }}
              />

              <View style={{marginLeft: normalize(5)}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontFamily: 'NotoSansKR-Bold',
                      color: '#1D232B',
                      fontSize: normalize(12),
                      lineHeight: normalize(14),
                    }}>
                    ㅇㅅㅇ
                  </Text>

                  <Text
                    style={{
                      fontFamily: 'NotoSansKR-Medium',
                      color: '#919EB6',
                      fontSize: normalize(9),
                      lineHeight: normalize(10),
                    }}>
                    1일전
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/threedot.png')}
                style={{
                  height: normalize(3),
                  width: normalize(12),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{paddingLeft: normalize(51), paddingRight: normalize(14)}}>
            <Text
              style={{
                fontFamily: 'NotoSansKR-Regular',
                color: '#313B49',
                fontSize: normalize(10),
              }}>
              오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/icons/love.png')}
                  style={{
                    height: normalize(20),
                    width: normalize(20),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  color: '#919EB6',
                  fontSize: normalize(10),
                  marginHorizontal: normalize(6),
                }}>
                5
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: normalize(18),
            paddingVertical: normalize(10),
            borderTopWidth: normalize(1),
            borderTopColor: '#F7F8FA',

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: normalize(14),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/galary.png')}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'NotoSansKR-Bold',
                color: '#AFB9CA',
                fontSize: normalize(10),
                lineHeight: normalize(11),
                marginLeft: normalize(14),
              }}>
              댓글을 남겨주세요.
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'NotoSansKR-Bold',
              color: '#AFB9CA',
              fontSize: normalize(10),
              lineHeight: normalize(11),
            }}>
            등록
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
