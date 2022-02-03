module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('do8kqfk4d'),
            api_key: env('539647757755573'),
            api_secret: env('wDR8zbisOMV22KyCSDZg-PjW1d0'),
        },
    },
});