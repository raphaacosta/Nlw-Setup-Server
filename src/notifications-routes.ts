import WebPush from 'web-push';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';

const publicKey = 'BGlwDAC6GbWygb1yHY6FQR5iA1E7U7qV7RyOVOmm-p5KCG8J7Wfyb_js9BUPF9DdGOWxBRRCMuwJ0n0wQzOROHc'
const privateKey = 'n9o-Nk_0smQBNlMPJIZvnG2mWkxB13UXqn1_Cp34ZiI'

WebPush.setVapidDetails(
  'http://localhost:3333',
  publicKey,
  privateKey
)

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () => {
    return {
      publicKey,
    }
  });

  app.post('/push/register', (request, reply) => {
    // console.log(request.body)

    return reply.status(201).send()
  });

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()
        })
      })
    })

    const { subscription } = sendPushBody.parse(request.body)

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'HELLO FROM BACKEND')
    }, 5000)

    return reply.status(201).send()
  })
}