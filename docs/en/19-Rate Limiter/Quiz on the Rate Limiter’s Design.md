# Quiz on the Rate Limiter’s Design

Test your knowledge of concepts related to rate-limiting.

```

Which of the following algorithms is used to smooth spikes in incoming requests at the edge of the window?

A)
Token bucket algorithm

B)
Sliding window log algorithm

C)
Fixed window counter algorithm

D)
None of the above


Assume that soft-throttling is used with a rate of 100 requests per minute and a 5% exceed in the limit is allowed. The client has sent the 104th request within the time limit. However, no resources are available to serve the request. What should the system do with this incoming request?

A)
Discard the request and send an error response to the client.

B)
Add a request to the queue and wait for the resource to become available.


Assume that the service owner adds some extra rules to the database. Consequently, data in the cache will become outdated. In this scenario, which components are responsible for updating the cache?

A)
The request processor

B)
Decision-maker

C)
Throttle rule retriever

D)
None of the above


A client has to send 18 MB of data at a rate of 6 Mbps (megabits per second) to a server. Let’s assume that the server processes data at a rate of 4 Mbps. If the leaky bucket algorithm is used at the server end, how much capacity must the queue hold so as not to discard any data?

A)
6 MB

B)
9 MB

C)
3 MB

D)
7 MB
```

