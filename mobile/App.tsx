import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { StatusBar } from "expo-status-bar";
import { styled } from 'nativewind';
import { useEffect } from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import blurBg from './assets/bg-blur.png';
import NlwLogo from './assets/nlw-spacetime-logo.svg';
import Stripes from './assets/stripes.svg';

const StyledStripes = styled(Stripes)

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/4d14945f11b3eed9b317',
};

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '4d14945f11b3eed9b317',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'nlwspacetime'
      }),
    },
    discovery
  );

  useEffect(() => {
    console.log(makeRedirectUri({
      scheme: 'nlwspacetime'
    }));
    

    if (response?.type === 'success') {
      const { code } = response.params;
      console.log(code);
      
    }
  }, [response]);

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground className="bg-gray-900 relative flex-1 items-center px-8 py-10" source={blurBg} imageStyle={{ position: 'absolute', left: '-100%' }}>
      <StyledStripes className='absolute left-2' />

      <View className='flex-1 items-center justify-center gap-6'>
        <NlwLogo />

        <View className='space-y-2'>
          <Text className='text-center font-title text-2xl leading-tight text-gray-50'>Sua cápsula do tempo</Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>

        <TouchableOpacity activeOpacity={0.7} className='rounded-full bg-green-500 px-5 py-3' onPress={() => signInWithGithub}>
          <Text className='font-alt text-sm uppercase text-black'>Cadastrar lembrança</Text>
        </TouchableOpacity>
      </View>

      <Text className='text-center font-body text-sm leading-relaxed text-gray-200'>Feito com 💜 no NLW da Rocketseat</Text>
      
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
